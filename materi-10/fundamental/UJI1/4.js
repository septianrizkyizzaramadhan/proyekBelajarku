getUserStatus({ id: 1, name: "Revy", isActive: true });
// "Active"

getUserStatus({ id: 2, name: "Andi", isActive: false });
// "Inactive"

getUserStatus(null);
// "User not found"


function getUserStatus(user) {
    if (!user) return 'User Not Found'
    return user.isActive ? 'Active' : 'Inactive'    
}


// Pengujian:
console.log(getUserStatus({ id: 1, name: "Revy", isActive: true })); 
// Output: Active

console.log(getUserStatus({ id: 2, name: "Andi", isActive: false })); 
// Output: Inactive

console.log(getUserStatus(null)); 
// Output: User not found