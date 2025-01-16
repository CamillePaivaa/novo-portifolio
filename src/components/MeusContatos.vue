<template>
  <div class="page_container">
    <h1>Contato</h1>
    <p>
      Entre em contato ou envie-me um e-mail diretamente para
      camillep590@hotmail.com
    </p>

    <v-container>
      <v-form
        ref="formRef"
        v-model="isValid"
        lazy-validation
        class="form_container"
      >
        <v-text-field
          label="Nome"
          v-model="formData.name"
          :rules="[(v) => !!v || 'O nome é obrigatório']"
          required
        ></v-text-field>

        <v-text-field
          label="Email"
          v-model="formData.email"
          :rules="[(v) => /.+@.+\..+/.test(v) || 'E-mail inválido']"
          required
        ></v-text-field>

        <v-textarea
          label="Mensagem"
          v-model="formData.message"
          :rules="[(v) => !!v || 'A mensagem é obrigatória']"
          required
        ></v-textarea>

        <v-btn class="btn_enviar" @click="submitForm">Enviar</v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      isValid: false,
    };
  },
  methods: {
    submitForm() {
      this.$refs.formRef.validate();

      if (this.isValid) {
        const templateParams = {
          from_name: this.formData.name,
          from_email: this.formData.email,
          message: this.formData.message,
        };

        emailjs
          .send(
            "service_md1x22b",
            "template_uin992w",
            templateParams,
            "e4spiPqgfETLx7HX7"
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              alert("Mensagem enviada com sucesso!");
              this.resetForm();
            },
            (error) => {
              console.log("FAILED...", error);
              alert("Erro ao enviar a mensagem.");
            }
          );
      } else {
        alert("Por favor, preencha todos os campos corretamente.");
      }
    },
    resetForm() {
      this.formData.name = "";
      this.formData.email = "";
      this.formData.message = "";
      this.isValid = false;
      this.$refs.formRef.reset();
    },
  },
};
</script>

<style scoped>
.page_container {
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  width: 70%;
  margin-left: 15%;
  row-gap: 40px;
}

.form_container {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 60%;
}

.btn_enviar {
  width: 160px;
  background-color: rgb(5, 5, 10);
  color: #fff;
}

@media (max-width: 400px) {
  .page_container {
    width: 90%;
    margin-left: 5%;
    row-gap: 20px;
  }

  h1,
  p {
    width: 90%;
    margin-left: 5%;
  }
  .form_container {
    row-gap: 10px;
    width: 100%;

    margin-left: 0%;
  }

  .btn_enviar {
    width: 100%;
  }
}
</style>
