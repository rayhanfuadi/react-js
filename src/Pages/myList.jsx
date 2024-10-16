import Navbar from "@/components/Layouts/Navbar"
import Footer from "@/components/Layouts/Footer"
import List from "@/components/Layouts/List"
import Counter from "@/components/Fragments/Counter"

const MyList = () => {
    return (
        <div className="bg-primary h-full">
            {/* Navbar */}
            <Navbar />

            {/* MyList */}
            <List />
            <div className="flex justify-center">
                <Counter />
            </div>

            {/* useState Component */}

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default MyList