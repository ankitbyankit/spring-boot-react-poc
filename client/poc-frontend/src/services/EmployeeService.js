const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1";

class EmployeeService {

    async gettEmployeess () {
        const response = await fetch(EMPLOYEE_API_BASE_URL + "/employeess");
        return new Promise((resolve,reject) => {
            if(response.ok){
                resolve(response.json())
            } else{
                reject("error");
            }
        });
    }

    async getEmployeebyId(id) {
        const response = await fetch(EMPLOYEE_API_BASE_URL + `/employees/${id}`)
            .catch((error) => {
                throw new Error(`Error fetching employee:${id}`);
            })

        return new Promise((resolve,reject) => {
            if(response.ok) {
                resolve(response.json())
            } else {
                reject("Oops! something went wrong");
            }
        });
    }

    async deleteEmployee(id) {
        const response = await fetch(EMPLOYEE_API_BASE_URL + `/employees/${id}`, {
            method: 'DELETE',
        }).catch( error => {
            console.log(error)
        });

       // console.log(`inside delete promise: ${response.ok}`);
        return new Promise((resolve,reject) => {
            if(response.ok) {
                resolve("Deleted successfully")
            } else {
                reject("Oops! something went wrong", [response]);
            }
        });
    }

    async createEmployee(employee) {
        const response = await fetch(EMPLOYEE_API_BASE_URL + "/employees", {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                first_name: employee.firstName,
                last_name: employee.lastName,
                email_id: employee.emailId 
            }),
            headers: {
                'Content-Type': 'application/json;'
            }
        }).catch( error => {
            console.log(error)
        });

        console.log(`inside create promise: ${response.status}`);
        return new Promise((resolve,reject) => {
            if(response.ok) {
                resolve(response.statusCode)
            } else {
                reject("Oops! something went wrong", [response]);
            }
        });
    }
    
    /*
    async getEmployees() {
        await fetch(EMPLOYEE_API_BASE_URL + "/employeess")
            .then(async (response) => {
                if(response.ok){
                    // console.log(response.json());
                    //console.log(JSON.stringify(response.body, null, 2));
                    const data = await response.json();
                    // let data = response.text();
                    console.log([data[0].first_name]);
                    //return data;
                    //return data[0].first_name;
                    return Promise.resolve(data[0].first_name);
                }
                else 
                    throw new Error("Something went wrong");
                
            }).catch(                                                                                                                                                                                                                                                                                                                                                                                                       
                (error) => {
                    console.log("inside catch block");
                    return [];
                }
            )
            //.then(data => {
            //    console.log(data);
            //    this.setState({users: data});
            //    console.log(`Length of users: ${this.state.users.length}`);
            //});
    }*/

}

export default new EmployeeService();