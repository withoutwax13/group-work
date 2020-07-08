package config

type Config struct {
	DB *DBConfig
}

type DBConfig struct {
	Dialect string
	Path    string
}

func GetConfig() *Config {
	return &Config{
		DB: &DBConfig{
			Dialect: "sqlite3",
			Path:    "../sqlite3.db",
		},
	}
}
