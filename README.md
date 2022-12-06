# gordian_seat_maps

Run Project Locally;

1. Build docker image locally => `docker compose -f docker-compose-local.yaml build gordian_seat_maps`
2. Spin up the database docker image => `docker compose -f docker-compose-local.yaml up -d gordian_seat_rethink`
3. Spin up the backend graph => `docker compose -f docker-compose-local.yaml up -d gordian_seat_maps`
