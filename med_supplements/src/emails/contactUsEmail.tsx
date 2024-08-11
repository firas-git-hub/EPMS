import {
	Body,
	Button,
	Container,
	Column,
	Head,
	Heading,
	Html,
	Img,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";
import * as React from "react";
import jsonData from "../data/email.json";

interface ContactUsEmailProps {
	fname: string;
	lname: string;
	email: string;
	phone: string;
	msg: string;
}

const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(Date.now());

export default function ContactUsEmail({ fname, lname, email, phone, msg }: ContactUsEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>{jsonData.receivedEmail.headerText + " " + lname.toUpperCase() + fname.toLowerCase()}</Preview>
			<Body style={main}>
				<Container>
					<Section style={logo}>
						<Img src="/epms_logo_trnsprt_bg.png" />
					</Section>

					<Section style={content}>
						<Row style={{ ...boxInfos, paddingBottom: "0" }}>
							<Column>
								<Text style={paragraph}>
									<b>Time: </b>
									{formattedDate}
								</Text>
								<Text style={paragraph}>
									<b>Email: </b>
									{email}
								</Text>
								<Text style={paragraph}>
									<b>Phone: </b>
									{phone}
								</Text>
								<Text style={paragraph}>
									{msg}
								</Text>
							</Column>
						</Row>
					</Section>

					<Text
						style={{
							textAlign: "center",
							fontSize: 12,
							color: "rgb(0,0,0, 0.7)",
						}}
					>
						© 2022 | EPMS Inc., Alaeddine Bldg, Sarafand, Lebanon,
						LEB. | www.epms.com
					</Text>
				</Container>
			</Body>
		</Html>
	);
}

const main = {
	backgroundColor: "#fff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
	fontSize: 16,
};

const logo = {
	padding: "30px 20px",
};

const containerButton = {
	display: "flex",
	justifyContent: "center",
	width: "100%",
};

const button = {
	backgroundColor: "#e00707",
	borderRadius: 3,
	color: "#FFF",
	fontWeight: "bold",
	border: "1px solid rgb(0,0,0, 0.1)",
	cursor: "pointer",
	padding: "12px 30px",
};

const content = {
	border: "1px solid rgb(0,0,0, 0.1)",
	borderRadius: "3px",
	overflow: "hidden",
};

const image = {
	maxWidth: "100%",
};

const boxInfos = {
	padding: "20px",
};

const containerImageFooter = {
	padding: "45px 0 0 0",
};
