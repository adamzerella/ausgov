import React from "react";
import AUfooter, { AUfooterNav, AUfooterEnd } from "@gov.au/footer";
import AUlinkList from "@gov.au/link-list";
import Link from "gatsby-link";

import "./footer.scss";

const Footer = () => (
	<AUfooter dark>
		<AUfooterNav>
			<AUlinkList
				items={[
					{
						link: "/about",
						text: "About",
					},
				]}
				linkComponent={Link}
			/>
		</AUfooterNav>
		<AUfooterEnd>
			© Commonwealth of Australia. With the exception of the Commonwealth
			Coat of Arms and where otherwise noted, this work is licensed under
			the{" "}
			<a href="https://raw.githubusercontent.com/adamzerella/ausgov/master/LICENSE">
				MIT license
			</a>
		</AUfooterEnd>
	</AUfooter>
);

export default Footer;
