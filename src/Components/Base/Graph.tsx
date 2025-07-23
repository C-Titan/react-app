import {
  LineChart, Line,
  BarChart, Bar,
  AreaChart, Area,
  PieChart, Pie, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";



type ChartType = "line" | "bar" | "area" | "pie" | "radar";
type Props = {
	type: ChartType;
	data: any[];
	xKey?: string;
	dataKeys?: string[]; // for multiple lines/bars
	colors?: string[];
	width?: number | string;
	height?: number;
};
export default function Graph({
	type,
	data,
	xKey = "name",
	dataKeys = ["value"],
	colors = ["#8884d8", "#82ca9d", "#ffc658"],
	width = "100%",
	height = 300,
}: Props) {
	const chartProps = { data, width: "100%", height };

	return (
		<ResponsiveContainer width={width} height={height}>
			{type === "line" && (
				<LineChart {...chartProps}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey={xKey} />
					<YAxis />
					<Tooltip />
					<Legend />
					{dataKeys.map((key, i) => (
						<Line
							key={key}
							type="monotone"
							dataKey={key}
							stroke={colors[i % colors.length]}
						/>
					))}
				</LineChart>
			)}

			{type === "bar" && (
				<BarChart {...chartProps}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey={xKey} />
					<YAxis />
					<Tooltip />
					<Legend />
					{dataKeys.map((key, i) => (
						<Bar
							key={key}
							dataKey={key}
							fill={colors[i % colors.length]}
						/>
					))}
				</BarChart>
			)}

			{type === "area" && (
				<AreaChart {...chartProps}>
					<defs>
						{dataKeys.map((key, i) => (
							<linearGradient
								key={key}
								id={`color${key}`}
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop
									offset="5%"
									stopColor={colors[i % colors.length]}
									stopOpacity={0.8}
								/>
								<stop
									offset="95%"
									stopColor={colors[i % colors.length]}
									stopOpacity={0}
								/>
							</linearGradient>
						))}
					</defs>
					<XAxis dataKey={xKey} />
					<YAxis />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />
					{dataKeys.map((key, i) => (
						<Area
							key={key}
							type="monotone"
							dataKey={key}
							stroke={colors[i % colors.length]}
							fillOpacity={1}
							fill={`url(#color${key})`}
						/>
					))}
				</AreaChart>
			)}

			{type === "pie" && (
				<PieChart>
					<Tooltip />
					<Legend />
					<Pie
						data={data}
						dataKey={dataKeys[0]}
						nameKey={xKey}
						cx="50%"
						cy="50%"
						outerRadius={100}
						fill={colors[0]}
						label
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={colors[index % colors.length]}
							/>
						))}
					</Pie>
				</PieChart>
			)}

			{type === "radar" && (
				<RadarChart outerRadius={90} data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey={xKey} />
					<PolarRadiusAxis />
					<Radar
						name={dataKeys[0]}
						dataKey={dataKeys[0]}
						stroke={colors[0]}
						fill={colors[0]}
						fillOpacity={0.6}
					/>
					<Legend />
				</RadarChart>
			)}
		</ResponsiveContainer>
	);
}
