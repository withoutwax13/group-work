package app

import (
	"github.com/group-work/backend/users_api/controllers"
)

func mapURLs() {
	router.GET("/ping", controllers.Ping)
}
