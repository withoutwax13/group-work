package users

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/group-work/backend/users_api/domain"
	"github.com/group-work/backend/users_api/services"
)

func CreateUser(c *gin.Context) {
	var user domain.User
	if err := c.ShouldBindJSON(&user); err != nil {
		// TODO: handle err.
		return
	}
	result, err := services.CreateUser(&user)
	if err != nil {
		// TODO: handle err.
		return
	}
	c.JSON(http.StatusCreated, *result)
}
