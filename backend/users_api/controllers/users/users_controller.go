package users

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/group-work/backend/users_api/domain"
	"github.com/group-work/backend/users_api/services"
	"github.com/group-work/backend/users_api/utils/errors"
)

func CreateUser(c *gin.Context) {
	var user domain.User
	if err := c.ShouldBindJSON(&user); err != nil {
		restError := errors.BadRequestError("Bad JSON")
		c.JSON(restError.Status, *restError)
		return
	}
	result, restError := services.CreateUser(&user)
	if restError != nil {
		c.JSON(restError.Status, *restError)
		return
	}
	c.JSON(http.StatusCreated, *result)
}
