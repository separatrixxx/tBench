import { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
        </>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};