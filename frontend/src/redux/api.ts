import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';

// Define base URL from environment variable
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create the API with token authentication
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // Get the token from auth state
      const token = (getState() as RootState).auth.token;
      
      // If we have a token, set the authorization header
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User', 'Tour', 'Venue', 'Event', 'Itinerary', 'Budget'],
  endpoints: (builder) => ({
    // User Endpoints
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    getProfile: builder.query({
      query: () => '/users/me',
      providesTags: ['User'],
    }),
    updateProfile: builder.mutation({
      query: (userData) => ({
        url: '/users/me',
        method: 'PUT',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),

    // Tour Endpoints
    getTours: builder.query({
      query: (params) => ({
        url: '/tours',
        params,
      }),
      providesTags: ['Tour'],
    }),
    getTourById: builder.query({
      query: (id) => `/tours/${id}`,
      providesTags: (result, error, id) => [{ type: 'Tour', id }],
    }),
    createTour: builder.mutation({
      query: (tourData) => ({
        url: '/tours',
        method: 'POST',
        body: tourData,
      }),
      invalidatesTags: ['Tour'],
    }),
    updateTour: builder.mutation({
      query: ({ id, ...tourData }) => ({
        url: `/tours/${id}`,
        method: 'PUT',
        body: tourData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Tour', id }],
    }),
    deleteTour: builder.mutation({
      query: (id) => ({
        url: `/tours/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tour'],
    }),

    // Venue Endpoints
    getVenues: builder.query({
      query: (params) => ({
        url: '/venues',
        params,
      }),
      providesTags: ['Venue'],
    }),
    getVenueById: builder.query({
      query: (id) => `/venues/${id}`,
      providesTags: (result, error, id) => [{ type: 'Venue', id }],
    }),
    createVenue: builder.mutation({
      query: (venueData) => ({
        url: '/venues',
        method: 'POST',
        body: venueData,
      }),
      invalidatesTags: ['Venue'],
    }),
    updateVenue: builder.mutation({
      query: ({ id, ...venueData }) => ({
        url: `/venues/${id}`,
        method: 'PUT',
        body: venueData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Venue', id }],
    }),
    deleteVenue: builder.mutation({
      query: (id) => ({
        url: `/venues/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Venue'],
    }),

    // Event Endpoints
    getEvents: builder.query({
      query: (params) => ({
        url: '/events',
        params,
      }),
      providesTags: ['Event'],
    }),
    createEvent: builder.mutation({
      query: (eventData) => ({
        url: '/events',
        method: 'POST',
        body: eventData,
      }),
      invalidatesTags: ['Event', 'Tour'],
    }),
    updateEvent: builder.mutation({
      query: ({ id, ...eventData }) => ({
        url: `/events/${id}`,
        method: 'PUT',
        body: eventData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Event', id },
        'Tour',
      ],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/events/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Event', 'Tour'],
    }),

    // Itinerary Endpoints
    getItineraries: builder.query({
      query: (tourId) => `/itineraries?tourId=${tourId}`,
      providesTags: ['Itinerary'],
    }),
    generateItinerary: builder.mutation({
      query: (itineraryData) => ({
        url: '/itineraries/generate',
        method: 'POST',
        body: itineraryData,
      }),
      invalidatesTags: ['Itinerary'],
    }),

    // Budget Endpoints
    getTourBudget: builder.query({
      query: (tourId) => `/tours/${tourId}/budget`,
      providesTags: ['Budget'],
    }),
    addExpense: builder.mutation({
      query: (expenseData) => ({
        url: '/expenses',
        method: 'POST',
        body: expenseData,
      }),
      invalidatesTags: ['Budget'],
    }),
    addIncome: builder.mutation({
      query: (incomeData) => ({
        url: '/income',
        method: 'POST',
        body: incomeData,
      }),
      invalidatesTags: ['Budget'],
    }),
  }),
});

// Export hooks for using the API endpoints
export const {
  // Auth hooks
  useLoginMutation,
  useRegisterMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  
  // Tour hooks
  useGetToursQuery,
  useGetTourByIdQuery,
  useCreateTourMutation,
  useUpdateTourMutation,
  useDeleteTourMutation,
  
  // Venue hooks
  useGetVenuesQuery,
  useGetVenueByIdQuery,
  useCreateVenueMutation,
  useUpdateVenueMutation,
  useDeleteVenueMutation,
  
  // Event hooks
  useGetEventsQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
  
  // Itinerary hooks
  useGetItinerariesQuery,
  useGenerateItineraryMutation,
  
  // Budget hooks
  useGetTourBudgetQuery,
  useAddExpenseMutation,
  useAddIncomeMutation,
} = api;