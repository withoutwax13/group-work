package app

import (
	"log"

	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	"github.com/withoutwax13/group-work/src/backend/config"
)

type App struct {
	Router *mux.Router
	DB     *gorm.DB
}

func (a *App) Initialize(config *config.Config) {
	db, err := gorm.Open(config.DB.Dialect, config.DB.Path)
	if err != nil {
		//log.Error("Fail to initialize the database")
	}
	a.DB = db
}
