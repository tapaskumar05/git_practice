const getEmployeesById = async (employeeId: string) => {
    try {
        return fetch(`http://dummy.restapiexample.com/api/v1/employee/${employeeId}`)
        .then(async data => {
            try {
                const employeeData = await data.json();
                if (employeeData) {
                    return {
                        isSuccess: true,
                        employeeData: employeeData
                    };
                }
                return {
                    isSuccess: false,
                    error: 'No Record Found',
                    employeeData: {}
                };
            } catch (e) {
                return {
                    isSuccess: false,
                    error: 'No Record Found',
                    employeeData: {}
                };
            }
        })
    } catch (e) {
        return {
            isSuccess: false,
            error: e,
            employeeData: {}
        }
    } 
}

export default getEmployeesById;
