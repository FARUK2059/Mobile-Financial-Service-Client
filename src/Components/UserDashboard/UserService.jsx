
// import { useRef } from "react";

import { useRef } from "react";
import SendMony from "./SendMony/SendMony";


const UserService = () => {
    const modalRef = useRef(null);

    const handleCloseModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    return (
        <div>
            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl"> ReadyPay <span className="text-blue-600">User</span> Service</h2>
                    </div>

                    <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6 md:grid-cols-2">

                        {/* Send Money section */}
                        <section className="rounded-3xl shadow-2xl">
                            <div className="p-8 text-center sm:p-12">
                                <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                                    Emjoy simple send money
                                </p>

                                <h2 className="mt-6 text-3xl font-bold">Per send money transection cost only 5 TK</h2>

                                {/* <Link to="/sendmony"
                                    className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
                                >
                                    Send Money
                                </Link> */}
                                <button className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl" onClick={() => modalRef.current.showModal()}  >Send Money</button>
                                <dialog id="my_modal_5" ref={modalRef} className="modal modal-bottom sm:modal-middle bg-fuchsia-500">
                                    <div className="modal-box bg-white">
                                        <div>
                                            <SendMony onSuccess={handleCloseModal} ></SendMony>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-primary">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </section>

                        <section className="rounded-3xl shadow-2xl">
                            <div className="p-8 text-center sm:p-12">
                                <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                                    Your order is on the way
                                </p>

                                <h2 className="mt-6 text-3xl font-bold">Thanks for your purchase, we're getting it ready!</h2>

                                <a
                                    className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
                                    href="#"
                                >
                                    Track Order
                                </a>
                            </div>
                        </section>

                        <section className="rounded-3xl shadow-2xl">
                            <div className="p-8 text-center sm:p-12">
                                <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                                    Your order is on the way
                                </p>

                                <h2 className="mt-6 text-3xl font-bold">Thanks for your purchase, we're getting it ready!</h2>

                                <a
                                    className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
                                    href="#"
                                >
                                    Track Order
                                </a>
                            </div>
                        </section>


                    </div>
                </div>
            </section>

        </div>
    );
};

export default UserService;