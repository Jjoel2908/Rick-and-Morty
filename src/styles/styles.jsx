import { text } from "@fortawesome/fontawesome-svg-core";
import { StyleSheet } from "react-native";

/**
 * Stylesheet for various components in the application.
 */
const Styles = StyleSheet.create({
    card: {
        marginHorizontal: 12,
        marginVertical: 8,
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
    },
    infoContainer: {
        flex: 1,
        padding: 12,
    },
    iconButton: {
        alignSelf: 'flex-start',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    title: {
        textAlign: 'center',
        fontSize: 18
    },
    subtitle: {
        textAlign: 'center',
        marginTop: 6
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    active: {
        opacity: 0.85
    },
    dragIcon: {
        marginRight: 4
    },
    containerLoanView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerErrorView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerDetailView: {
        textAlign: 'center',
        marginBottom: 12,
        fontSize: 18
    },
    textErrorView: {
        textAlign: 'center',
        fontSize: 18
    }
});

export default Styles;