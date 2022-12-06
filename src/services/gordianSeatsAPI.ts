"use strict";
import axios from "axios";

export interface GordianTripInterface {
  passengers: [any];
  tickets: [any];
}

const gordianApiUrl = `${process.env.GORDIAN_API_URL}/${process.env.GORDIAN_API_VERSION}`;

const gordianSeatsAPI = (() => {
  return {
    newTrip: (trip: GordianTripInterface) => {
      const newTripUrl = `${gordianApiUrl}/trip`;
      console.log(newTripUrl);
      console.log(process.env.GORDIAN_API_KEY);
      return axios
        .post(newTripUrl, {
          language: "en-US",
          currency: "USD",
          country: "US",
          tickets: [
            {
              status: "offered",
              offered_price: {
                currency: "USD",
                decimal_places: 2,
                base_price: 7000,
                markup: 0,
                total: 7000,
              },
              journeys: [
                {
                  segments: [
                    {
                      arrival_airport: "LAS",
                      arrival_time: "2020-07-05T15:54:00-08:00",
                      departure_airport: "PDX",
                      departure_time: "2020-07-04T13:38:00-08:00",
                      fare_basis: "LKX9C3B4",
                      fare_class: "L",
                      fare_family: "ECONOMY_BASIC",
                      marketing_airline: "NK",
                      marketing_flight_number: "671",
                    },
                  ],
                },
                {
                  segments: [
                    {
                      arrival_airport: "PDX",
                      arrival_time: "2020-07-10T12:52:00-08:00",
                      departure_airport: "LAS",
                      departure_time: "2020-07-10T10:39:00-08:00",
                      fare_basis: "LKX9C3B4",
                      fare_class: "L",
                      fare_family: "ECONOMY_BASIC",
                      marketing_airline: "NK",
                      marketing_flight_number: "765",
                      operating_airline: "NK",
                      operating_flight_number: "765",
                    },
                  ],
                },
              ],
            },
          ],
          passengers: [
            {
              passenger_id: "pax-0001",
              passenger_type: "adult",
            },
            {
              passenger_id: "pax-0002",
              passenger_type: "infant",
              on_lap_of: "pax-0001",
            },
          ],
          metadata: {
            "your-id": process.env.GORDIAN_API_KEY,
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  };
})();

export default gordianSeatsAPI;
