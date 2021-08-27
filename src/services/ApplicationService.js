import axios from "axios";

const APP_API_BASE_URL= "http://localhost:8080/api/v1/applications" ;
const APP_API_BASE_URL_POST= "http://localhost:8080/api/v1/addapplication" ;

class ApplicationService{
        getApplications(){
                return axios.get(APP_API_BASE_URL);
        }
        createApplications(application){
                return axios.post(APP_API_BASE_URL_POST,application);
        }
}

export default new ApplicationService();