import { services } from "../../constants/service";

const Services = () => {
    return (
        <main id="services">
            <div className="services-header mx-20 pb-20">
                <div className="pt-[150px]">
                    <div
                        className="bg-white rounded-tl-[0] rounded-br-[0] rounded-tr-[6px] rounded-bl-[0] text-[black] 
                               h-[30px] w-[100px] text-xs font-semibold tracking-[2px] flex justify-center items-center"
                    >SERVICES
                    </div>
                </div>
                <h1 className="text-5xl pt-[30px] leading-[1.2]">Tailored insurance for<br /> every stage of life.</h1>
            </div>
            <hr className="white-line" />
            <div className="services-body">
                <ul className="">{services.map((service) => (
                    <li key={service.id} className="service-list-item">
                        <div className="flex ml-20 mr-60">
                            <h1>{service.id}</h1>
                            <h2>{service.title}</h2>
                            <p>{service.desc}</p>
                        </div>
                        <hr className="white-line" />
                    </li>
                ))}</ul>
            </div>
        </main>
    )
}

export default Services