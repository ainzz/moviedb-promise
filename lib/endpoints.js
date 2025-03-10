'use strict'

module.exports = {
	authentication: {
		requestToken: 'authentication/token/new',
		session: 'authentication/session/new'
	},
	methods: {
		configuration: {
			'': {
				resource: 'configuration',
				method: 'get'
			},
			Languages: {
				resource: 'configuration/languages',
				method: 'get'
			},
			PrimaryTranslations: {
				resource: 'configuration/primary_translations',
				method: 'get'
			}
		},
		find: {
			'': {
				resource: 'find/:id',
				method: 'get'
			}
		},
		search: {
			Movie: {
				resource: 'search/movie',
				method: 'get'
			},
			Tv: {
				resource: 'search/tv',
				method: 'get'
			},
			Multi: {
				resource: 'search/multi',
				method: 'get'
			},
			Collection: {
				resource: 'search/collection',
				method: 'get'
			},
			Person: {
				resource: 'search/person',
				method: 'get'
			},
			List: {
				resource: 'search/list',
				method: 'get'
			},
			Company: {
				resource: 'search/company',
				method: 'get'
			},
			Keyword: {
				resource: 'search/keyword',
				method: 'get'
			}
		},
		collection: {
			Info: {
				resource: 'collection/:id',
				method: 'get'
			},
			Images: {
				resource: 'collection/:id/images',
				method: 'get'
			}
		},
		discover: {
			Movie: {
				resource: 'discover/movie',
				method: 'get'
			},
			Tv: {
				resource: 'discover/tv',
				method: 'get'
			}
		},
		movie: {
			Info: {
				resource: 'movie/:id',
				method: 'get'
			},
			AlternativeTitles: {
				resource: 'movie/:id/alternative_titles',
				method: 'get'
			},
			Credits: {
				resource: 'movie/:id/credits',
				method: 'get'
			},
			ExternalIds: {
				resource: '/movie/:id/external_ids',
				method: 'get'
			},
			Images: {
				resource: 'movie/:id/images',
				method: 'get'
			},
			Videos: {
				resource: 'movie/:id/videos',
				method: 'get'
			},
			Keywords: {
				resource: 'movie/:id/keywords',
				method: 'get'
			},
			Recommendations: {
				resource: 'movie/:id/recommendations',
				method: 'get'
			},
			Releases: {
				resource: 'movie/:id/releases',
				method: 'get'
			},
			ReleaseDates: {
				resource: 'movie/:id/release_dates',
				method: 'get'
			},
			Trailers: {
				resource: 'movie/:id/trailers',
				method: 'get'
			},
			Translations: {
				resource: 'movie/:id/translations',
				method: 'get'
			},
			Similar: {
				resource: 'movie/:id/similar_movies',
				method: 'get'
			},
			Reviews: {
				resource: 'movie/:id/reviews',
				method: 'get'
			},
			Lists: {
				resource: 'movie/:id/lists',
				method: 'get'
			},
			Changes: {
				resource: 'movie/:id/changes',
				method: 'get'
			},
			RatingUpdate: {
				resource: 'movie/:id/rating',
				method: 'post'
			}
		},
		tv: {
			Info: {
				resource: 'tv/:id',
				method: 'get'
			},
			Credits: {
				resource: 'tv/:id/credits',
				method: 'get'
			},
			ExternalIds: {
				resource: 'tv/:id/external_ids',
				method: 'get'
			},
			Images: {
				resource: 'tv/:id/images',
				method: 'get'
			},
			Videos: {
				resource: 'tv/:id/videos',
				method: 'get'
			},
			Similar: {
				resource: 'tv/:id/similar',
				method: 'get'
			},
			Translations: {
				resource: 'tv/:id/translations',
				method: 'get'
			},
			SeasonInfo: {
				resource: 'tv/:id/season/:season_number',
				method: 'get'
			},
			SeasonCredits: {
				resource: 'tv/:id/season/:season_number/credits',
				method: 'get'
			},
			SeasonVideos: {
				resource: 'tv/:id/season/:season_number/videos',
				method: 'get'
			},
			SeasonExternalIds: {
				resource: 'tv/:id/season/:season_number/external_ids',
				method: 'get'
			},
			SeasonImages: {
				resource: 'tv/:id/season/:season_number/images',
				method: 'get'
			},
			EpisodeInfo: {
				resource: 'tv/:id/season/:season_number/episode/:episode_number',
				method: 'get'
			},
			EpisodeCredits: {
				resource: 'tv/:id/season/:season_number/episode/:episode_number/credits',
				method: 'get'
			},
			EpisodeExternalIds: {
				resource: 'tv/:id/season/:season_number/episode/:episode_number/external_ids',
				method: 'get'
			},
			EpisodeImages: {
				resource: 'tv/:id/season/:season_number/episode/:episode_number/images',
				method: 'get'
			},
			OnTheAir: {
				resource: 'tv/on_the_air',
				method: 'get'
			},
			AiringToday: {
				resource: 'tv/airing_today',
				method: 'get'
			},
			Recommend: {
				resource: 'tv/:id/recommendations',
				method: 'get'
			},
			Changes: {
				resource: 'tv/:id/changes',
				method: 'get'
			}
		},
		person: {
			Info: {
				resource: 'person/:id',
				method: 'get'
			},
			MovieCredits: {
				resource: 'person/:id/movie_credits',
				method: 'get'
			},
			TvCredits: {
				resource: 'person/:id/tv_credits',
				method: 'get'
			},
			CombinedCredits: {
				resource: 'person/:id/combined_credits',
				method: 'get'
			},
			Images: {
				resource: 'person/:id/images',
				method: 'get'
			},
			TaggedImages: {
				resource: 'person/:id/tagged_images',
				method: 'get'
			},
			Changes: {
				resource: 'person/:id/changes',
				method: 'get'
			},
			Latest: {
				resource: 'person/latest',
				method: 'get'
			},
			Popular: {
				resource: 'person/popular',
				method: 'get'
			},
			ExternalIds: {
				resource: 'person/:id/external_ids',
				method: 'get'
			}
		},
		credit: {
			Info: {
				resource: 'credit/:id',
				method: 'get'
			}
		},
		list: {
			Info: {
				resource: 'list/:id',
				method: 'get'
			}
		},
		genre: {
			MovieList: {
				resource: 'genre/movie/list',
				method: 'get'
			},
			TvList: {
				resource: 'genre/tv/list',
				method: 'get'
			},
			Movies: {
				resource: 'genre/:id/movies',
				method: 'get'
			}
		},
		keyword: {
			Info: {
				resource: 'keyword/:id',
				method: 'get'
			},
			Movies: {
				resource: 'keyword/:id/movies',
				method: 'get'
			}
		},
		company: {
			Info: {
				resource: 'company/:id',
				method: 'get'
			},
			Movies: {
				resource: 'company/:id/movies',
				method: 'get'
			}
		},
		account: {
			Info: {
				resource: 'account',
				method: 'get'
			},
			Lists: {
				resource: 'account/:id/lists',
				method: 'get'
			},
			FavoriteMovies: {
				resource: 'account/:id/favorite/movies',
				method: 'get'
			},
			FavoriteUpdate: {
				resource: 'account/:id/favorite',
				method: 'post'
			},
			RatedMovies: {
				resource: 'account/:id/rated/movies',
				method: 'get'
			},
			MovieWatchlist: {
				resource: 'account/:id/watchlist/movies',
				method: 'get'
			},
			TvWatchlist: {
				resource: 'account/:id/watchlist/tv',
				method: 'get'
			},
			WatchlistUpdate: {
				resource: 'account/:id/watchlist',
				method: 'post'
			},
			RatedTv: {
				resource: 'account/:id/rated/tv',
				method: 'get'
			},
			FavoriteTv: {
				resource: 'account/:id/favorite/tv',
				method: 'get'
			}
		},
		misc: {
			LatestMovies: {
				resource: 'movie/latest',
				method: 'get'
			},
			UpcomingMovies: {
				resource: 'movie/upcoming',
				method: 'get'
			},
			NowPlayingMovies: {
				resource: 'movie/now_playing',
				method: 'get'
			},
			PopularMovies: {
				resource: 'movie/popular',
				method: 'get'
			},
			TopRatedMovies: {
				resource: 'movie/top_rated',
				method: 'get'
			},
			ChangedMovies: {
				resource: 'movie/changes',
				method: 'get'
			},
			ChangedTvs: {
				resource: 'tv/changes',
				method: 'get'
			},
			ChangedPeople: {
				resource: 'person/changes',
				method: 'get'
			},
			TopRatedTvs: {
				resource: 'tv/top_rated',
				method: 'get'
			},
			PopularTvs: {
				resource: 'tv/popular',
				method: 'get'
			}
		}
	}
}