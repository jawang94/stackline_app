import type { JSX } from "react";
import LandingPage from "components/pages/landing/LandingPage";
import { Route, Routes as RoutesImport } from "react-router-dom";

export default function Routes(): JSX.Element {
  return (
    <RoutesImport>
      <Route path="/" element={<LandingPage />} />
    </RoutesImport>
  );
}
