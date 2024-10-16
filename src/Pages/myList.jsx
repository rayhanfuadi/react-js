import Navbar from "@/components/Layouts/Navbar"
import Footer from "@/components/Layouts/Footer"
import List from "@/components/Layouts/List"

const MyList = () => {
    return (
        <div className="bg-primary h-full">
            {/* Navbar */}
            <Navbar />

            {/* MyList */}
            <List />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default MyList