import { redirect } from "@sveltejs/kit";

export const prerender = true;

export function load({ params }) {
	if (params?.version)
		throw redirect(
			302,
			`/${params?.version}/docs/js-client/reference`
		);

	throw redirect(
		302,
		`/docs/js-client/reference`
	);
}
