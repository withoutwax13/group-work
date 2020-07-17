package users

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/group-work/backend/users_api/domain"
	"github.com/group-work/backend/users_api/services"
	"github.com/group-work/backend/users_api/utils/errors"
)

func CreateUser(c *gin.Context) {
	user := domain.User{}
	if err := c.ShouldBindJSON(&user); err != nil { // Not acceptable JSON error.
		restError := errors.BadRequestError("Bad JSON")
		c.JSON(restError.Status, *restError)
		return
	}
	// Call for service.
	resultUser, restError := services.CreateUser(&user)
	if restError != nil { // Service error.
		c.JSON(restError.Status, *restError)
		return
	}
	c.JSON(http.StatusCreated, *resultUser)
}

func GetUser(c *gin.Context) {
	user := domain.User{}
	id, err := strconv.ParseInt(c.Param("user_id"), 10, 64)
	if err != nil { // Not acceptable JSON error.
		restError := errors.BadRequestError("Not acceptable id")
		c.JSON(restError.Status, *restError)
		return
	}
	user.ID = id
	// Call for service.
	resultUser, restError := services.GetUser(&user)
	if restError != nil { // Service error.
		return
	}
	c.JSON(http.StatusOK, *resultUser)
}
