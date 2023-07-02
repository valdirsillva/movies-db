
import { ThreeDots } from "react-loader-spinner"

export function Spinner({ loagind }) {
    return (
        <section className="relative flex justify-center items-center bottom-5">
            <ThreeDots
                height="100"
                width="100"
                radius="0"
                color="#ff0000"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={loagind}
            />
        </section>
    )
}