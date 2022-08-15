import React, { useContext } from "react";
import { RepresentativesContext } from "../Context/RepresentativeContext";
import styled from "styled-components";
import { RepProfileComponent } from "./RepProfileComponent";
import { v4 as uuidv4, v4 } from "uuid";

const MunicpalRepComponent = () => {
	//get user's local representatives
	const { repsByLocation, mayors } = useContext(RepresentativesContext);
	//Filter for municipal representatives. need to exclude MPP, MNA, MLA, and MP
	const municipalReps = repsByLocation.filter((rep) => {
		// console.log("repFilter", rep.elected_office);
		return rep.elected_office.length > 3;
	});
	//check to see if there are any municipal reps in database

	console.log("MunicipalReps", municipalReps.length);
	return (
		<Wrapper>
			<TitleBox>
				<Title>Municipal</Title>
			</TitleBox>
			<Container
				layout
				// transition={{ layout: { duration: 4, type: "spring" } }}
			>
				{municipalReps.length > 0 ? (
					municipalReps.map((rep) => {
						// console.log("rep", rep);
						return <RepProfileComponent key={v4()} rep={rep} />;
					})
				) : (
					<StyledP>
						We currently don't have any municipal representatives to display for
						this area! We are constantly working to increase our database, if
						you'd like to make a request to get more representatives'
						information for this area you can do so
						<a href="mailto:requests@opacity.ca" target="_blank">
							{" "}
							here!
						</a>
						.
					</StyledP>
				)}
				{/* {municipalReps.map((rep) => {
					// console.log("rep", rep);
					return <RepProfileComponent key={v4()} rep={rep} />;
				})} */}
			</Container>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: var(--color-white);
	border-radius: 8px;
	box-shadow: -7px 11px 9px -7px #311e10;
	margin-top: 30px;
`;
const TitleBox = styled.div`
	display: flex;
	justify-content: center;
	background-color: var(--color-red);
	width: 100%;
	padding: 10px;
	/* height: 30px; */
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	/* border-bottom: 2px solid var(--color-red); */
`;
const Title = styled.p`
	font-size: 40px;
	font-weight: 400;
	font-family: var(--font-heading);
	color: var(--color-white);
`;
const Container = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: center;
	gap: 20px;
	padding: 10px;
	border-left: 3px solid var(--color-red);
	border-right: 3px solid var(--color-red);
	border-bottom: 3px solid var(--color-red);
	/* min-width: 60%; */
	color: white;
	/* padding:200px; */
`;
const StyledP = styled.div`
	font-family: "Poppins", sans-serif;
	font-weight: 100;
	margin-top: 20px;
`;
export default MunicpalRepComponent;
