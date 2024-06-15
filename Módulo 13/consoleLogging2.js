function getUser(callback) {
  console.log("Recuperando informações do usuário");
  setTimeout(() => {
    callback({
      id: 0,
      name: "Davi",
      surname: "Nascimento",
    });
  }, 2000);
}

function getFriendList(user, callback) {
  console.log(
    `Recuperando lista de amigos do usuário ${user.name} ${user.surname}`
  );
  setTimeout(() => {
    callback(["joão", "bruna", "felipe", "lira"]);
  }, 2000);
}

function getPhotos(username, callback) {
  console.log(`Recuperando lista fotos do usuário lira ${username}`);
  setTimeout(() => {
    callback(["egito", "bahamas", "maldivas", "suécia"]);
  }, 2000);
}

getUser((usuario) => {
  getFriendList(usuario, (friendlist) => {
    getPhotos(friendlist[3], console.log);
  });
});
