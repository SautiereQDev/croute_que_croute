import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import MyMapComponent from "./GoogleMap";
import getAssetPath from "@/lib/assetPath";

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
  const sectionRef = useRef<HTMLElement>(null);

  // Pour l'effet de parallaxe
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);

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
            data.message ??
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
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Image de fond avec effet parallaxe */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <div className="absolute inset-0 bg-amber-800/5 z-10" />{" "}
        {/* Overlay pour améliorer la lisibilité du texte */}
        <Image
          src={getAssetPath("/images/bakery_logo.svg")}
          alt="Fond logo boulangerie"
          fill
          className="object-cover object-center opacity-5"
          sizes="100vw"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative"
        >
          {/* Éléments décoratifs */}
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-amber-100/50 z-0 hidden md:block"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-16 h-16 rounded-full bg-amber-200/40 z-0 hidden md:block"
            animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <Image
              src={getAssetPath("/images/cake.svg")}
              alt="Gâteau"
              width={80}
              height={80}
              className="mx-auto bg-amber-50 p-3 rounded-full shadow-lg"
            />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Contactez-Nous
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Une question, une commande spéciale ou simplement envie de nous dire
            bonjour ? N&apos;hésitez pas à nous contacter !
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-12 relative">
          {/* Éléments décoratifs */}
          <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-amber-100/70 z-0 hidden md:block" />
          <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-amber-200/60 z-0 hidden md:block" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-amber-100/50 relative overflow-hidden"
          >
            {/* Effet de lumière */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-100/30 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-50/30 rounded-full blur-3xl z-0" />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-amber-800 mb-6 flex items-center">
                <span className="bg-amber-100 p-2 rounded-full mr-3 shadow-sm">
                  <Image
                    src={getAssetPath("/images/baguette.svg")}
                    alt="Baguette"
                    width={24}
                    height={24}
                  />
                </span>
                Informations de Contact
              </h3>
              <div className="space-y-6">
                <motion.div
                  className="bg-gradient-to-br from-amber-50 to-amber-100/80 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-start">
                    <div className="bg-amber-200 p-3 rounded-full shadow-sm mr-4">
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
                      <h4 className="text-lg font-semibold text-amber-800 mb-1">
                        Adresse
                      </h4>
                      <p className="text-amber-700">
                        123 Rue du Pain, 75001 Paris, France
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-amber-50 to-amber-100/80 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="bg-amber-200 p-3 rounded-full shadow-sm mr-4">
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
                      <h4 className="text-lg font-semibold text-amber-800 mb-1">
                        Téléphone
                      </h4>
                      <p className="text-amber-700">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-amber-50 to-amber-100/80 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-start">
                    <div className="bg-amber-200 p-3 rounded-full shadow-sm mr-4">
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
                      <h4 className="text-lg font-semibold text-amber-800 mb-1">
                        Email
                      </h4>
                      <p className="text-amber-700">
                        contact@croutequecroute.fr
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-amber-50 to-amber-100/80 p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-start">
                    <div className="bg-amber-200 p-3 rounded-full shadow-sm mr-4">
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
                      <h4 className="text-lg font-semibold text-amber-800 mb-1">
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
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10"
              >
                <h3 className="text-2xl font-semibold text-amber-800 mb-6 flex items-center">
                  <span className="bg-amber-100 p-2 rounded-full mr-3 shadow-sm">
                    <Image
                      src={getAssetPath("/images/oven.svg")}
                      alt="Four"
                      width={24}
                      height={24}
                    />
                  </span>
                  Notre emplacement
                </h3>
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg border-4 border-white hover:shadow-xl transition-all duration-500"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <MyMapComponent />
                </motion.div>
                <div className="mt-4 bg-amber-50/80 p-4 rounded-lg shadow-sm text-center">
                  <p className="text-amber-700 italic">
                    Venez nous rendre visite et découvrir nos délicieuses
                    créations !
                  </p>
                </div>
              </motion.div>
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
                  <div className="bg-gradient-to-br from-white to-amber-50/80 p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold text-amber-800 mb-6 flex items-center">
                      <span className="bg-amber-100 p-2 rounded-full mr-3 shadow-sm">
                        <Image
                          src={getAssetPath("/images/croissant.svg")}
                          alt="Croissant"
                          width={24}
                          height={24}
                        />
                      </span>
                      Envoyez-nous un message
                    </h3>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                      >
                        <label
                          htmlFor="name"
                          className="text-amber-800 font-medium mb-2 flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2 text-amber-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          Nom
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register("name")}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.name
                              ? "border-red-500 bg-red-50"
                              : "border-amber-200 bg-amber-50/50 shadow-inner transition-all duration-300 hover:bg-amber-50/80"
                          } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:shadow-lg`}
                          placeholder="Votre nom"
                        />
                        <AnimatePresence>
                          {errors.name && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-red-500 text-sm mt-1 flex items-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                              </svg>
                              {errors.name.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <label
                          htmlFor="email"
                          className="text-amber-800 font-medium mb-2 flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2 text-amber-600"
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
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email")}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email
                              ? "border-red-500 bg-red-50"
                              : "border-amber-200 bg-amber-50/50 shadow-inner transition-all duration-300 hover:bg-amber-50/80"
                          } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:shadow-lg`}
                          placeholder="Votre email"
                        />
                        <AnimatePresence>
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-red-500 text-sm mt-1 flex items-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                              </svg>
                              {errors.email.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <label
                          htmlFor="message"
                          className="text-amber-800 font-medium mb-2 flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2 text-amber-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                          </svg>
                          Message
                        </label>
                        <textarea
                          id="message"
                          {...register("message")}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.message
                              ? "border-red-500 bg-red-50"
                              : "border-amber-200 bg-amber-50/50 shadow-inner transition-all duration-300 hover:bg-amber-50/80"
                          } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:shadow-lg`}
                          placeholder="Votre message"
                        ></textarea>
                        <AnimatePresence>
                          {errors.message && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-red-500 text-sm mt-1 flex items-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                              </svg>
                              {errors.message.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="pt-2"
                      >
                        <motion.button
                          type="submit"
                          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 shadow-lg hover:shadow-amber-500/30 hover:-translate-y-1 font-medium md:w-auto flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                          Envoyer
                        </motion.button>
                      </motion.div>
                    </form>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
