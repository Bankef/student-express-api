    //Axios is installed in the package.JSON file in this directory and import into this file
    import axios from 'axios'

    let base_url='/api/students'

    export default {

    // This is a request to get the student data
        getAllStudents() {
            return axios.get(base_url).then(response => {
                return response.data
            })
        },

        // Has the same effect as the curl command and axios sends it back as a response data
        addStudent(student) {
            return axios.post(base_url, student).then(response => {
                return response.data
            })
        }
    }