// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
async function getUser(params) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    const listUser = data.map(user => user.name)
    console.log(listUser)
}
getUser()