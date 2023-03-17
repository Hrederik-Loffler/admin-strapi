module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'vasiok12311@gmail.com',
        defaultReplyTo: 'vasiok12311@gmail.com',
      },
    },
  },
});
