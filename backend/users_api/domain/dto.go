package domain

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// User type ...
type User struct {
	ID             primitive.ObjectID   `json:"_id" bson:"_id"`
	Email          string               `json:"email" bson:"email"`
	LastName       string               `json:"lastName" bson:"lastName"`
	FirstName      string               `json:"firstName" bson:"firstName"`
	DateCreated    string               `json:"dateCreated" bson:"dateCreated"`
	ProfilePicture string               `json:"profilePicture,omitempty" bson:"profilePicture"`
	JoinedGroupIDs []primitive.ObjectID `json:"joinedGroupIds,omitempty" bson:"joinedGroupIds"`
}
