C: controller
V: views
M: models

> Why react ?
    
  -  To develop rich internet applications.
    
  -  Much better infastructure and processing capability is now available at client side.
        
        Earlier before 2010, Browser used behave only as Http client and to render html documents, but nowerdays they act like a online virtual OS.
            
            Nowerdays browser offers

                                Data storage:
                                            ~   local storage.
                                            ~   Session storage.
                                            ~   Indexed Database.

                                Multithreading capability:
                                            ~    Web Workers.

                                Device Access:  
                                            ~    Geolocation.

                                Sockets: 
                                            ~    Server Sent Events.
                                            ~    Web Sockets.
- We build an application that runs in the browser that:
        
        ~ handling user interaction.
        ~ view generation.
        ~ state mantained.

Problem: 
    In order to understand how react and other frameworks help us in building the above mentioned application
    We will make a salary calculator

  01_Salary Calculator:
        Salary = basic + hra + da - tax%
  02_Salary_Calculator:
        Is a better version of 01_Salary_calculator as it is mantainable.


- Mantainable Activities:
    - Fixing Bugs.
    - Adding new features.
    - Removing dead features.
    - Updating old features.

> An application is easy to mantain if it is easy to change.
  > For an application to be easy to change there should be a proper segregation of concern. 


> Making our application maintainable:
 - step-1: Seprate view responsibility from non-view responsibility. | Segregatation of concern/responsibility. 
    {Achieved in 02_Salary_Calculator}
 - step-2: Making our application loosely coupled. 

              Loosely Coupled: When we seprates a responsibility (view and model part in our case) then the responsibility of A(view) part should be insulated from B(model) part.In loosely coupled, Any change in public interface of B affects the A part, But any change in priate implementation of B doesnt affect A part.
              
              Tightly Coupled: If any change in private implementation of B affects A then it is said to be tightly coupled.

  In 02_Salary_Calculator, If we calculate the salary before populating our model, then we wont get desired result.
  our View in this case knows that model must be populated before calculation. Which is not the responsibility of view part.ie: it knows that model will need value of "basic" before calculatiion. which shouldnt be the case. it shouldnted
  
  It must only act as a mediator between the user and model.
  {We overcome this in 03_Salary_Calculator}

- step-3: