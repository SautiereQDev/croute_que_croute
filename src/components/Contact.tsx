import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Définition du schéma de validation avec Zod
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Adresse email invalide" }),
  message: z
    .string()
    .min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});

// Type pour les données du formulaire basé sur le schéma Zod
type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialisation de React Hook Form avec le resolver Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Utiliser useEffect pour s&apos;assurer que le composant est monté côté client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = (data: FormData) => {
    // Réinitialiser l'état d'erreur avant chaque soumission
    setError(null);

    fetch("https://api.quentinsautiere.com/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Données du formulaire soumises:", data);
          setSubmitted(true);
        } else {
          // Si la réponse contient un message d'erreur, l'utiliser
          setError(
            data.message ||
              "Une erreur est survenue lors de l'envoi du message."
          );
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la soumission du formulaire:", error);
        setError(
          "Une erreur de est survenue lors de l'envoie. Veuillez réessayer plus tard."
        );
      });
    // Suppression du finally qui réinitialise submitted
  };

  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Contactez-Nous
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Une question, une commande spéciale ou simplement envie de nous dire
            bonjour ? N&apos;hésitez pas à nous contacter !
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-amber-800 mb-6">
                Informations
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-200 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-amber-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-amber-800">
                      Adresse
                    </h4>
                    <p className="text-amber-700">
                      123 Rue du Pain Frais
                      <br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-200 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-amber-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-amber-800">
                      Téléphone
                    </h4>
                    <p className="text-amber-700">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-200 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-amber-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-amber-800">
                      Email
                    </h4>
                    <p className="text-amber-700">contact@croutequecroute.fr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-200 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-amber-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-amber-800">
                      Horaires
                    </h4>
                    <p className="text-amber-700">
                      Lundi - Vendredi: 7h - 19h
                      <br />
                      Samedi: 7h - 20h
                      <br />
                      Dimanche: 7h - 13h
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Rendu conditionnel du formulaire uniquement côté client */}
              {isMounted &&
                (error ? (
                  <motion.div
                    className="bg-red-100 border border-red-400 text-red-700 px-6 py-8 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-red-600 mx-auto mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-xl font-semibold mb-2">Erreur</h3>
                    <p>{error}</p>
                    <motion.button
                      onClick={() => setError(null)}
                      className="mt-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Réessayer
                    </motion.button>
                  </motion.div>
                ) : submitted ? (
                  <motion.div
                    className="bg-green-100 border border-green-400 text-green-700 px-6 py-8 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-green-600 mx-auto mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-xl font-semibold mb-2">
                      Message Envoyé !
                    </h3>
                    <p>
                      Merci pour votre message. Nous vous répondrons dans les
                      plus brefs délais.
                    </p>
                  </motion.div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-semibold text-amber-800 mb-6">
                      Envoyez-nous un message
                    </h3>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-amber-800 font-medium mb-2"
                        >
                          Nom
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register("name")}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.name
                              ? "border-red-500 bg-red-50"
                              : "border-amber-300 bg-amber-50"
                          } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                          placeholder="Votre nom"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-amber-800 font-medium mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email")}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email
                              ? "border-red-500 bg-red-50"
                              : "border-amber-300 bg-amber-50"
                          } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                          placeholder="Votre email"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-amber-800 font-medium mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          {...register("message")}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.message
                              ? "border-red-500 bg-red-50"
                              : "border-amber-300 bg-amber-50"
                          } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                          placeholder="Votre message"
                        ></textarea>
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full md:w-auto"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Envoyer
                      </motion.button>
                    </form>
                  </div>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
