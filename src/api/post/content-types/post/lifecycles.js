module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "evgeniy.demchenko@devit.group",
        subject: "You have new post",
        text: `Your new post is ${result.data}`,
      });
    } catch (err) {
      console.log("err", err);
    }
  }
};
