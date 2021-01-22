# EngageBackend
I have implemented a solution for all 4 use cases. The code for the front end is in repository Engage, and the backend in repository EngageBackend

To build and run the backend please follow these steps
1. in the base directory type command "mvn clean install"
2  Run the Spring-Boot project "mvn spring-boot:run"
    The database will be initialised every time the application is run because ddl-auto=create-drop
    It will however need an instance of MySQL running at :-
    spring.datasource.url=jdbc:mysql://localhost:3306/engage
    spring.datasource.username=root
    spring.datasource.password=root
    
 3. The frontEnd is on localhost:4200 
