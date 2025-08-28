import { configureStore } from '@reduxjs/toolkit'
import { adminAuthApi } from '../redux/features/adminAuth/adminAuthApi'
import adminAuthReducer from '../redux/features/adminAuth/adminAuthSlice'
import { sliderApi } from './features/slider/sliderApi'
import { technologyApi } from './features/technology/technologyApi'
import { portfolioApi } from './features/portfolio/portfolioApi'
import { eventsApi } from './features/events/eventsApi'
import { teamApi } from './features/team/teamApi'
import { learnApi } from './features/learn/learnApi'




export const store = configureStore({
  reducer: {
    adminAuthApi: adminAuthReducer, //
    [adminAuthApi.reducerPath]: adminAuthApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    [technologyApi.reducerPath]: technologyApi.reducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
    [teamApi.reducerPath]: teamApi.reducer,
    [learnApi.reducerPath]: learnApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(adminAuthApi.middleware)
    .concat(sliderApi.middleware)
    .concat(technologyApi.middleware)
    .concat(portfolioApi.middleware)
    .concat(eventsApi.middleware)
    .concat(teamApi.middleware)
    .concat(learnApi.middleware),
    
})