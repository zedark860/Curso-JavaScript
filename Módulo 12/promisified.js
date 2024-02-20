// user <= {}
// friends => ['joão', 'bruna', 'felipe', 'Lira']
//photos <= ['egito', 'bahamas', 'maldivas', 'suécia']

function getUser() {
  console.log("Recuperando informações do usuário");
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 0, name: "Davi", surname: "Nascimento" });
    }, 2000);
  });
  return promise1;
}

function getFriendList(user) {
  console.log(
    `Recuperando lista de amigos do usuários ${user.name} ${user.surname}`
  );
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(["joão", "bruna", "felipe", "Lira"]);
    }, 2000);
  });
  return promise2;
}

function getPhotos(username) {
  console.log(`Recuperando lista de fotos do usuário ${username}`);
  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(["egito", "bahamas", "maldivas", "suécia"]);
    }, 2000);
  });
  return promise3;
}

async function displayLirasPhotos() {
  try{
    const user = await getUser();
    const friends = await getFriendList(user);
    const photos = await getPhotos(friends[3]);
    // console.log(photos);
    return photos;
  } catch(error) {
    console.error(error);
  } finally {
    console.log('Terminando a conexão com o Instagram');
  }
}

// caso não tenha retorno

// displayLirasPhotos();

//ou

//displayLirasPhotos().then(photos => console.log(photos)); (caso tenha return)

// ou

// caso tenha retorno
(async () => {
  const result = await displayLirasPhotos();
  console.log(result);
})();

