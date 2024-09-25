<template>
  <div class="hobbys_container">
    <h1>Meus Hobbyes</h1>
    <div class="img_text_container">
      <img class="img1" src="../assets/esporte.png" />
      <div class="legenda_esportes">
        <h3>Praticar Esportes</h3>
        <p>
          Amo praticar esportes e, durante minha infância, participei de
          diversas competições, onde cheguei a ganhar medalha de bronze nos
          Jogos Escolares de Minas Gerais. Essa experiência me ensinou a
          importância da disciplina, trabalho em equipe e perseverança,
          qualidades que aplico também em minha carreira como desenvolvedora
          frontend
        </p>
      </div>
    </div>
    <div class="img_linha_container">
      <div>
        <img class="img" src="../assets/viagem.png" />
        <h3>Viajar</h3>
        <p>
          Gosto de viajar, pois acredito que explorar novos lugares e culturas
          enriquece a vida e amplia horizontes. Cada viagem é uma oportunidade
          de aprender e conhecer coisas novas
        </p>
      </div>

      <div>
        <img class="img" src="../assets/estudar.png" />
        <h3>Aprender Coisas Novas</h3>
        <p>
          Estou sempre em busca de conhecimento para aprimorar minhas
          habilidades. O aprendizado contínuo é fundamental para meu crescimento
          e melhorar a qualidade dos meus projetos
        </p>
      </div>

      <div>
        <img class="img" src="../assets/dorama.png" />
        <h3>Assistir Doramas</h3>
        <p>
          Gosto de assistir doramas, pois eles sempre trazem histórias
          envolventes e emocionantes.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.hobbys_container {
  display: flex;
  flex-direction: column;
  padding-left: 15%;
}

.legenda_esportes {
  width: 450px;
}

.img_linha_container {
  display: flex;
  flex-direction: row;
  column-gap: 40px;
  margin-top: 50px;
  width: 70%;
  justify-content: space-around;
}

.img_text_container {
  display: flex;
  flex-direction: row;
  column-gap: 70px;
}
.img1 {
  width: 500px;
  height: 300px;
  border-radius: 10px;
}
.img {
  width: 335px;
  height: 250px;
  border-radius: 10px;
}
</style>
