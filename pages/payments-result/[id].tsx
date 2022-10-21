import axios from 'axios'
import { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

interface Props {
    paymentType: "error" | "success"
}

const PaymentsResult: React.FC<Props> = ({ paymentType }) => {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        first: "",
        second: "",
        name: ""
    })

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        if (Object.values(form).some(x => x === '')) {
            Swal.fire({
                title: "¡Error!",
                text: "Los campos son obligatorios.",
                icon: "error",
                confirmButtonText: "Cerrar",
            });
            return
        }

        if (form.first !== form.second) {
            Swal.fire({
                title: "¡Error!",
                text: "Los correos no coinciden.",
                icon: "error",
                confirmButtonText: "Cerrar",
            });
            return
        }
        try {
            const response = await axios.post('/api/mail', { email: form.first, name: form.name })

            if (response.status === 200) {
                Swal.fire({
                    title: "¡Gracias!",
                    text: "Gracias por favor revisa tu correo con la informacion que te hemos enviado.",
                    icon: "success",
                    confirmButtonText: "Cerrar",
                    didClose: () => {
                        router.replace('/')
                    }
                });

            } else {
                Swal.fire({
                    title: "¡Error!",
                    text: "Por favor intenta de nuevo.",
                    icon: "error",
                    confirmButtonText: "Cerrar",
                });
            }
        } catch (error) {
            Swal.fire({
                title: "¡Error!",
                text: "Por favor intenta de nuevo. Contactanos al +12312412412",
                icon: "error",
                confirmButtonText: "Cerrar",
            });
        } finally {
            setLoading(false)
        }
    }

    if (paymentType === "error") {
        return <div>Lo sentimos el pago no se pudo completar intentalo nuevament o contacte con nosotros al +112412412</div>
    }

    if (loading) {
        return (
            <div className='grid place-items-center h-screen w-screen'>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-poppins text-xl text-center'>Enviandoooo......</h2>
                    <div role="status" className="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                        <div className="mb-10 w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        <div className="flex items-baseline mt-4 space-x-6">
                            <div className="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                            <div className="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                            <div className="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                            <div className="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                            <div className="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                            <div className="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                            <div className="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center ">
                <label htmlFor="name" className="sr-only ">
                    Nombres
                </label>
                <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    type="text"
                    id="name"
                    name="name"
                    className="shadow-md focus:ring-green-200 p-4 focus:border-green-200 block w-72 md:w-96 rounded-md sm:text-md "
                    placeholder="Ingresa tus nombres"
                />
            </div>
            <div className="flex items-center justify-center ">
                <label htmlFor="email" className="sr-only ">
                    Email
                </label>
                <input
                    value={form.first}
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    type="email"
                    id="email"
                    name="first"
                    className="shadow-md focus:ring-green-200 p-4 focus:border-green-200 block w-72 md:w-96 rounded-md sm:text-md "
                    placeholder="Ingresa tu correo"
                />
            </div>
            <div className="flex items-center justify-center ">
                <label htmlFor="email" className="sr-only ">
                    Confirmar email
                </label>
                <input
                    value={form.second}
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    type="email"
                    id="email"
                    name="second"
                    className="shadow-md focus:ring-green-200 p-4 focus:border-green-200 block w-72 md:w-96 rounded-md sm:text-md "
                    placeholder="Ingresa tu correo"
                />
            </div>
            <div className="flex items-center justify-center ">
                <button
                    type="submit"
                    className="p-4 w-72 md:w-96 rounded-md bg-green-100 hover:bg-green-200 text-white text-bold text-xl uppercase sm:text-sm"
                >
                    Enviar
                </button>
            </div>
        </form>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    const sessionId = context.params?.id
    console.log(context.params)

    if (sessionId === "error") {
        return {
            props: {
                paymentType: "error"
            }
        }
    }

    console.log(process.env.NEXT_PUBLIC_HOST)
    const validatePayment = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/payments`, { sessionId })


    if (validatePayment.data.status !== "success") {
        return {
            props: {
                paymentType: "error"
            }
        }
    }

    return {
        props: {
            paymentType: "success"
        }
    }
}

export default PaymentsResult