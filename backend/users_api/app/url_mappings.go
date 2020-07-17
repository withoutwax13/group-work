package app

import (
	"github.com/group-work/backend/users_api/controllers/ping"
	"github.com/group-work/backend/users_api/controllers/users"
)

func mapURLs() {
	router.GET("/ping", ping.Ping)

	router.GET("/users/get/:user_id", users.GetUser)
	router.POST("/users/create", users.CreateUser)
}
