package services

import (
	"github.com/group-work/backend/users_api/domain"
	"github.com/group-work/backend/users_api/utils/errors"
	"github.com/group-work/backend/users_api/utils/time_util"
)

func CreateUser(user *domain.User) (*domain.User, *errors.RESTError) {
	user.DateCreated = time_util.GetNowString()
	return user, nil
}

func GetUser(user *domain.User) (*domain.User, *errors.RESTError) {
	return nil, nil
}
