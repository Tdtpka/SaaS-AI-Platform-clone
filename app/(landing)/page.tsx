import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () =>{
    return (
        <div>
            Landing Page
            <div>
                <Link href="/sign-in">
                    <Button>
                        Login
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button>
                        Regiter
                    </Button>
                </Link>
            </div>
        </div>
    )
}
export default LandingPage;