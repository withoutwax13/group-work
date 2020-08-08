package app

import (
	"github.com/gin-gonic/gin"
	"github.com/group-work/backend/users_api/domain"
)

var (
	router = gin.Default()
)

func StartApplication() {
	mapURLs()
	domain.ConnectDatabase()
	router.Run(":8080")
}
