import React from 'react';

import CopyBox from '../components/CopyBox'
import CopyInputRow from '../components/CopyInputRow'
import SearchModal from './SearchModal'

class CopyGenerator extends React.Component {

	constructor(props) {
		super(props)
		this.headingPhrases = [
			'Select', 'Beach', 'Mountain', 'Lake']
		this.linkingPhrases = [
			'Select', 'Beginning', 'Middle', 'End'
		]
		this.bodyPhrases = [
			['Aspect', 'these', 'are','different','aspects'],
			['Setting', 'these', 'are','different','settings'],
			['Views', 'these', 'are','different','views'],
			['Dwelling', 'these', 'are','different','options'],
			['Amenities', 'these', 'are','different','options'],
		]
		this.state = {
		  copyString:  '',
		  showModal: false
		}
	}

	showModal = () => {
		this.setState({ showModal: true });
	  };
	
	hideModal = () => {
		this.setState({ showModal: false });
	  };

	addCopyTerm = event => {
		let copy = this.state.copyString;
		copy = copy + " " + event
		this.setState({copyString : copy})
	}

	render() {
		return (
			<div className="main">
			<SearchModal show={this.state.showModal} 
				handleClose={this.hideModal}
				handleClick={this.addCopyTerm} />
				<div className="tool">
					{/* Heading Phrase Tool  */}
					<div className="section-bar">
						<h3>Heading Phrase Tool</h3>
					</div>
					<div className="section-elements">
						<CopyInputRow 
							options={this.headingPhrases} 
							handleOpen={this.showModal}/>
					</div>
					{/* Linking */}
					<div className="section-bar">
						<h3>Linking</h3>
					</div>
					<div className="section-elements">
						<CopyInputRow 
							options={this.headingPhrases} 
							handleOpen={this.showModal}/>
					</div>
					{/* <!-- Body Phrase Tools --> */}
					<div className="section-bar">
						<h3>Body Phrase Tool</h3>
					</div>
					<div className="section-elements">

						{this.bodyPhrases.map((arr, index) => {
							return <CopyInputRow 
										key={index}
										options={arr}
										handleOpen={this.showModal} />
						})}
					</div>
					{/* <!-- Closing --> */}
					<div className="section-bar">
						<h3>Closing / Call to Action</h3>
					</div>
					<div className="section-elements">
						<input defaultValue="Enter keyword..." />
						<button className="elemental-search">find</button>
					</div>
					{/* <!-- Synonem Finder --> */}
					<div className="section-bar">
						<h3>Synonym Finder</h3>
					</div>
					<div className="section-elements">
						<input defaultValue="Enter keyword..." />
						<button className="elemental-search">find</button>
					</div>
				</div>
				<CopyBox copyString={this.state.copyString} />
			</div>
		)
	}
}

export default CopyGenerator