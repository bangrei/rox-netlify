export class VcardApiResponse {
	constructor(vcard) {
		this.id = vcard.id ? vcard.id : ""
		this.refId = vcard.refId ? vcard.refId : ""
		this.firstName = vcard.firstName ? vcard.firstName : ""
		this.lastName = vcard.lastName ? vcard.lastName : ""

		this.fullName = `${this.firstName} ${this.lastName}`

		this.jobTitle = vcard.jobTitle ? vcard.jobTitle : ""
		this.aboutMe = vcard.aboutMe ? vcard.aboutMe : ""
		this.email = vcard.email ? vcard.email : ""

		function getAddress() {
			const address = vcard.address

			if (!address) return ""

			const unitNo = address.unitNo ? address.unitNo : ""
			const street1 = address.street1 ? address.street1 : ""
			const street2 = address.street2 ? address.street2 : ""
			const street3 = address.street3 ? address.street3 : ""
			const building = address.building ? address.building : ""
			const postalCode = address.postalCode ? address.postalCode : ""
			const city = address.city ? address.city : ""
			const state = address.state ? address.state : ""
			const country = address.country ? address.country : ""

			const allFieldNull =
				!unitNo &&
				!street1 &&
				!street2 &&
				!street3 &&
				!building &&
				!postalCode &&
				!city &&
				!state &&
				!country

			if (allFieldNull) return ""

			return `${street1} ${street2} ${street3} ${unitNo} ${building} ${postalCode} ${city} ${state} ${country}`
		}

		this.getAddress = getAddress

		this.address = vcard.address
			? vcard.address
			: {
				unitNo: "",
				street1: "",
				street2: "",
				street3: "",
				building: "",
				postalCode: "",
				city: "",
				state: "",
				country: "",
			  }

		this.didNo = vcard.didNo
			? vcard.didNo
			: {
				countryCode: "",
				areaCode: "",
				localNumber: "",
			  }
		this.mobileNo = vcard.mobileNo
			? vcard.mobileNo
			: {
				countryCode: "",
				areaCode: "",
				localNumber: "",
			  }
		this.faxNo = vcard.faxNo
			? vcard.faxNo
			: {
				countryCode: "",
				areaCode: "",
				localNumber: "",
			  }

		this.photoUrl = vcard.photoUrl ? vcard.photoUrl : ""
		this.threeDimensionalModelName = vcard.threeDimensionalModelName ? vcard.threeDimensionalModelName : ""
		this.arDetectionPatternName = vcard.arDetectionPatternName ? vcard.arDetectionPatternName : ""
		this.organisation = vcard.organisation ? vcard.organisation : ""
		this.linkedInUrl = vcard.linkedInUrl ? vcard.linkedInUrl : ""
	}
}

export class VcardApiRequest {
	constructor(vcard) {
		this.id = vcard.id ? vcard.id : ""
		this.organisationId = vcard.organisationId ? vcard.organisationId : ""
		this.refId = vcard.refId ? vcard.refId : ""
		this.firstName = vcard.firstName ? vcard.firstName : ""
		this.lastName = vcard.lastName ? vcard.lastName : ""

		this.jobTitle = vcard.jobTitle ? vcard.jobTitle : ""
		this.aboutMe = vcard.aboutMe ? vcard.aboutMe : ""
		this.email = vcard.email ? vcard.email : ""

		this.address = vcard.address
			? vcard.address
			: {
				unitNo: "",
				street1: "",
				street2: "",
				street3: "",
				building: "",
				postalCode: "",
				city: "",
				state: "",
				country: "",
			  }

		this.didNo = vcard.didNo
			? vcard.didNo
			: {
				countryCode: "",
				areaCode: "",
				localNumber: "",
			  }
		this.mobileNo = vcard.mobileNo
			? vcard.mobileNo
			: {
				countryCode: "",
				areaCode: "",
				localNumber: "",
			  }
		this.faxNo = vcard.faxNo
			? vcard.faxNo
			: {
				countryCode: "",
				areaCode: "",
				localNumber: "",
			  }

		this.linkedInUrl = vcard.linkedInUrl ? vcard.linkedInUrl : ""

		if (vcard.photo)
			this.photo = vcard.photo

		if (vcard.threeDimensionalModel)
			this.threeDimensionalModel = vcard.threeDimensionalModel

		if (vcard.arDetectionPattern)
			this.arDetectionPattern = vcard.arDetectionPattern
	}
}
