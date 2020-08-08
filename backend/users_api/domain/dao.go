package domain

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"

	"github.com/group-work/backend/users_api/utils"
)

func Create(user *User) (*User, *utils.RestErr) {
	usersC := db.Collection("users")
	ctx, _ := context.WithTimeout(context.Background(), time.Second*10)
	result, err := usersC.InsertOne(ctx, user)
	if err != nil {
		return nil, utils.InternalServerErr("can't create user account.")
	}
	user.ID = result.InsertedID.(primitive.ObjectID)
	return user, nil
}

func FindByID(HexID string, publicData bool) (*User, *utils.RestErr) {
	var user User
	usersC := db.Collection("users")
	ID, err := primitive.ObjectIDFromHex(HexID)
	if err != nil {
		return nil, utils.BadRequest("id is invalid.")
	}
	ctx, _ := context.WithTimeout(context.Background(), time.Second*10)
	if err := usersC.FindOne(ctx, bson.M{"_id": ID}).Decode(&user); err != nil {
		return nil, utils.InternalServerErr("can't query database.")
	}
	if user.ID == primitive.NilObjectID {
		return nil, utils.NotFound("user not found.")
	}
	if publicData == true {
		user.JoinedGroupIDs = []primitive.ObjectID{}
	}
	return &user, nil
}
