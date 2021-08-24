package com.dh.medicamentos;

import com.dh.medicamentos.dao.ConfiguracionJDBC;
import com.dh.medicamentos.dao.impl.MedicamentoDaoH2;
import com.dh.medicamentos.model.Medicamento;
import com.dh.medicamentos.service.MedicamentoService;
import org.junit.Assert;
import org.junit.Test;

public class Main {

    public static void main(String[] args) {
	// write your code here

        MedicamentoService medicamentoService = new MedicamentoService(new MedicamentoDaoH2(new ConfiguracionJDBC()));
        Medicamento medicamento = new Medicamento("Ibuprofeno", "lab123", 1000, 200.0);
        medicamentoService.guardar(medicamento);
        System.out.println(medicamentoService.buscar(1));



        }
}
