package domain

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	db *mongo.Database
)

func ConnectDatabase() {
	URI := "mongodb://localhost:27017"
	client, err := mongo.NewClient(options.Client().ApplyURI(URI))
	if err != nil {
		log.Fatal(err)
	}
	ctx, _ := context.WithTimeout(context.Background(), time.Second*15)
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}
	db = client.Database("users")
}
