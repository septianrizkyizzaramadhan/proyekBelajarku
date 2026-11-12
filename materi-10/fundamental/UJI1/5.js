function createUser(name, email, age) {
    if (age < 18) {
    return { success: false, message: "Age must be at least 18" }
    }
    if (!name || !email || !age) {
        return { success: false, message: "All fields are required" }
    }
    else {return{
            success: true,
            data: {
                name,
                email,
                age
                }
            }
    }
}

console.log(createUser("Revy", "revy@example.com", 18));