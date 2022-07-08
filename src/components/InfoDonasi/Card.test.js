import React from "react";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import InfoDonasi from './index';


    test('it should render a button with the name Lihat selengkapnya', async () => {
        render(<InfoDonasi />)
        const Selengkapnya = screen.getByRole('button', { name: 'Lihat Selengkapnya' })
        expect(Selengkapnya).toBeInTheDocument();
      })

      test('it should render a button with the name selengkapnya', async () => {
        render(<InfoDonasi />)
        const Selengkapnya = screen.getByRole('button', { name: 'Lihat Selengkapnya' })
        expect(Selengkapnya).toBeEnabled();
      })