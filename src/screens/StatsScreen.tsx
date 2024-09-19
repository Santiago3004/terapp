import React, { useEffect, useState } from 'react';
import { View, Button, Alert, FlatList, Text, TouchableOpacity } from 'react-native';
import Pdf from 'react-native-pdf';
import RNFS from 'react-native-fs';

const StatsScreen = () => {
    const [reportes, setReportes] = useState<string[]>([]);
    const [selectedReport, setSelectedReport] = useState<string | null>(null);
    const apiUrl = 'https://51ca-152-200-176-25.ngrok-free.app/reportes';

    useEffect(() => {
        const fetchReportes = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) throw new Error('Error al cargar reportes');
                const data = await response.json();
                setReportes(data);
            } catch (error) {
                console.error('Error al obtener reportes:', error);
                Alert.alert('Error', 'No se pudieron cargar los reportes.');
            }
        };

        fetchReportes();
    }, []);

    const downloadPDF = async (reportName: string) => {
        const filePath = `${RNFS.DocumentDirectoryPath}/${reportName}`;

        try {
            const response = await RNFS.downloadFile({
                fromUrl: `${apiUrl}/${reportName}`,
                toFile: filePath,
            }).promise;

            if (response.statusCode === 200) {
                Alert.alert('Éxito', 'PDF descargado en: ' + filePath);
                setSelectedReport(filePath);
            } else {
                Alert.alert('Error', 'No se pudo descargar el PDF.');
            }
        } catch (error) {
            console.error('Error al descargar el PDF:', error);
            Alert.alert('Error', 'Hubo un problema al descargar el PDF.');
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={reportes}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => downloadPDF(item)}>
                        <Text style={{ padding: 10, fontSize: 16 }}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
            {selectedReport && (
                <Pdf
                    source={{ uri: selectedReport, cache: true }}
                    style={{ flex: 1 }}
                />
            )}
        </View>
    );
};

export default StatsScreen;
